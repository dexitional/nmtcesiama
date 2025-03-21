import { getPost } from "@/lib/api";
import Image from "next/image";
import Img from '@/public/bread.jpg'
import { FaPeopleGroup } from "react-icons/fa6";
import VisionSection from "@/components/VisionSection";

const { STRAPI_APP_URL } = process.env;

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 360;
export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}) {
  const { slug } = await params;
  const sp = await searchParams;
  //const data = await getPost(slug);
  console.log(slug)
  return (
    <main className="font-sans min-h-[30rem]">
      <section className="px-6 py-2 md:px-0 md:pt-12 md:pb-6 w-full border-b-2 bg-primary bg-header-bg bg-repeat-x">
        <div className="mx-auto md:max-w-[68rem] flex flex-col items-center justify-center space-y-2 md:space-y-4">
          <h1 className="text-lg md:text-2xl md:tracking-wider font-bold text-white capitalize">The Principal</h1>
        </div>
      </section>
      <main className="mx-auto px-4 py-4 md:py-10 md:max-w-5xl flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10 items-start">
          <div className="relative h-48 w-full md:h-72 md:w-2/5 rounded-lg overflow-hidden">
            <Image src={Img} alt="" className="object-contain object-left-top" fill/>
          </div>
          <section className="flex-1 space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl text-primary font-bold">Evelyn Opoku Gyamfi Okyere</h2>
              <h3 className="md:text-xl font-medium">Principal</h3>
            </div>
            <div className="pb-4 flex flex-col space-y-4 text-sm md:text-lg text-justify font-medium text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ea, ipsam minima exercitationem, dicta aut voluptatem fugiat, commodi recusandae soluta porro reiciendis nulla. Ipsam modi quaerat minima quo a dolore vel? Accusamus hic explicabo expedita esse at error eveniet ratione, labore incidunt a praesentium accusantium nihil quibusdam dolores doloremque tempore nam? Et unde nihil minima nesciunt esse eligendi amet dolore hic ullam, mollitia assumenda. Pariatur a veritatis laborum, expedita nulla obcaecati doloremque quisquam consequatur alias. Ea debitis molestias nam, temporibus ducimus tempora? Ab earum esse saepe dolorum fugiat alias reiciendis odit dolor fuga error delectus placeat eos, aliquam ut rerum?
            </div>
          </section>
      </main>
    </main>
  );
}
