import LogoMain from "./LogoMain";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

function Header() {
  const navigations = [
    {
      label: "About",
      link: "",
      subMenu: [
        { label: "School History", link: "/history" },
        { label: "Mission & Vision", link: "/vision" },
        { label: "The Principal", link: "/principal" },
        { label: "Past Principals", link: "/past-principals" },
        { label: "Board of School", link: "/board" },
        { label: "Legends & Hall of Fame", link: "/legends" },
      ],
    },
    {
      label: "Academics",
      link: "",
      subMenu: [
        { label: "⁠Admissions", link: "/admissions" },
        { label: "⁠Fees Structure", link: "/fees" },
        { label: "Academic Structure", link: "/structure" },
        { label: "Practicals & Off-Campus", link: "/practicals" },
      ],
    },

    {
      label: "Student Life",
      link: "",
      subMenu: [
        { label: "Campus Life", link: "/campus-life" },
        { label: "SRC & Leadership", link: "/src-leaders" },
      ],
    },
    {
      label: "Media",
      link: "",
      subMenu: [
        { label: "News", link: "/news" },
        { label: "Events", link: "/events" },
        { label: "Gallery", link: "/gallery" },
        //{ label: 'Journals', link: '#' },
      ],
    },
    {
      label: "Extras",
      link: "",
      subMenu: [
        { label: "Facilities & Projects", link: "/projects" },
        { label: "Staff Directory", link: "/directory" },
        { label: "Admission Checker", link: "/checker" },
        {
          label: "MOH Portal Login",
          link: "https://portal.healthtraining.gov.gh/application",
        },
      ],
    },
  ];

  return (
    <header className="z-20 sm:sticky sm:top-0 bg-white w-full shadow-[0px_10px_10px_rgba(0,0,0,0.1)]">
      {/* Top Nav Bar */}
      <div className="hidden sm:block w-full bg-[rgb(167,185,215)] font-sans">
        <div className="md:mx-auto w-full h-10 sm:max-w-7xl font-medium text-primary text-sm flex items-center justify-between">
          <span className="font-black tracking-widest text-base">
            NURSING AND MIDWIFERY TRAINING COLLEGE - ESIAMA
          </span>
          <div className="space-x-4 divide divide-x-2">
            <span>(031) 2092320</span>
            <span className="pl-3">chntsesiama@gmail.com</span>
          </div>
        </div>
      </div>
      {/* Menu Bar */}
      <div className="w-full">
        <div className="hidden mx-auto w-full sm:h-[7rem] sm:max-w-7xl sm:flex items-center justify-between ">
          <LogoMain />
          <MainNav data={navigations} />
        </div>
      </div>
      <MobileNav data={navigations} />
    </header>
  );
}

export default Header;
