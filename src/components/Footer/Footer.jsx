import { PiComputerTowerBold } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="footer p-10 bg-primaryLight dark:bg-gray-800 text-neutral-content flex justify-center gap-40">
          <aside className="flex flex-col items-center">
            <div className="px-8 py-6 bg-transparent mb-5 hover:bg-transparent hover:border-white  normal-case text-xl md:text-3xl border-[1px] border-white rounded-none">
              <h1 className="font-normal text-white tracking-widest flex items-center gap-x-1">
                <PiComputerTowerBold></PiComputerTowerBold>Comp Harbor
              </h1>
            </div>
            <div className="text-base text-center text-white space-y-1">
              <p>Computer Harbor Industries</p>
              <p className="pb-2">Providing reliable tech since 2020</p>
              <hr />
              <p className="pt-2">
                Copyright © 2020 - All right reserved by Computer Harbor
                Industries Ltd
              </p>
            </div>
          </aside>
        </footer>
      </div>
    </>
  );
};

export default Footer;
