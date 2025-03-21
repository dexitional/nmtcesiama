import { getPost } from "@/lib/api";
import Image from "next/image";
import Img from '@/public/bread.jpg'

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
  const data = await getPost(slug);

  return (
    <main className=" font-sans min-h-[30rem]">
      <section className="px-6 py-2 md:px-0 md:pt-12 md:pb-6 w-full border-b-2 bg-primary bg-header-bg bg-repeat-x">
        <div className="mx-auto md:max-w-[68rem] flex flex-col items-center justify-center space-y-2 md:space-y-4">
          <h1 className="text-lg md:text-2xl md:tracking-wider font-bold text-white capitalize">{slug}</h1>
        </div>
      </section>
      <section className="w-full bg-gradient-to-r from-white from-20% via-50% to-80% via-primary/60 to-white ">
        <div className="relative mx-auto px-4 py-4 md:py-4 md:max-w-5xl flex flex-col space-y-4 text-sm md:text-lg text-justify font-medium text-gray-600">
          <div className="relative h-16 md:h-48 rounded-lg overflow-hidden shadow">
            <Image src={Img} alt="" className="object-cover" fill/>
          </div>
        </div>
      </section>
      <section className="px-4 md:px-0 mb-10 w-full bg-header-bg">
        <div className="mx-auto py-4 md:py-10 md:max-w-5xl flex flex-col space-y-4 text-sm md:text-lg text-justify font-medium text-gray-600">
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ea, ipsam minima exercitationem, dicta aut voluptatem fugiat, commodi recusandae soluta porro reiciendis nulla. Ipsam modi quaerat minima quo a dolore vel? Accusamus hic explicabo expedita esse at error eveniet ratione, labore incidunt a praesentium accusantium nihil quibusdam dolores doloremque tempore nam? Et unde nihil minima nesciunt esse eligendi amet dolore hic ullam, mollitia assumenda. Pariatur a veritatis laborum, expedita nulla obcaecati doloremque quisquam consequatur alias. Ea debitis molestias nam, temporibus ducimus tempora? Ab earum esse saepe dolorum fugiat alias reiciendis odit dolor fuga error delectus placeat eos, aliquam ut rerum?
        </div>
      </section>

      {/* <section className="px-6 md:px-0 mb-10 w-full">
        <div className="mx-auto py-10 md:max-w-[68rem] flex flex-col space-y-4">
          <div className="space-y-2 border-b border-black">
            <h1 className="md:text-xl font-medium flex items-center justify-between">
              <span className="">Most Recent Publications</span>
              <button className="px-2 md:px-3 py-1 bg-black text-xs md:text-sm text-white font-semibold">
                More
              </button>
            </h1>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-4 md:gap-x-6 gap-y-10">
            reviewcard
          </div>
        </div>
      </section>  */}

      <section className="px-6 md:px-0 mb-10 w-full">
        <div className="mx-auto py-10 md:max-w-[68rem] flex flex-col space-y-4">
          <div className="space-y-2 border-b border-black">
            <h1 className="md:text-xl font-medium flex items-center justify-between">
              <span className="">Most Recent Publications</span>
              <button className="px-2 md:px-3 py-1 bg-black text-xs md:text-sm text-white font-semibold">
                More
              </button>
            </h1>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-4 md:gap-x-6 gap-y-10">
            reviewcard
          </div>
        </div>
      </section> 

      
    </main>
  );
}
