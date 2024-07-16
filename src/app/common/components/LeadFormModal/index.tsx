"use client"
import { Dialog } from "@headlessui/react";
import Form from "../../../common/sections/SelectforCompare/Form";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
function LeadFormModal() {
  const searchParams = useSearchParams();
  const isOpen = !!searchParams.get("brochure");
  const downloadFile = searchParams.get("downloadFile") ?? '';
  const fileName = searchParams.get("fileName");
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        router.push(pathname);
      }}
      className="relative z-50 mx-auto"
    >
      <div className="fixed w-full inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0  flex w-full items-center justify-center p-4">
        <Dialog.Panel className="md:w-9/12 w-full">
          <div className="bg-white w-full  p-6 border rounded">
          <div
              onClick={(e) => router.push(pathname)}
              className="text-black text-xl mb-[-50px] flex justify-end w-full font-extrabold  cursor-pointer  h-6 "
            >
              <AiOutlineClose  />
            </div>
            <Form
              popup={false}
              source={""}
              downloadFile={downloadFile ?? ''}
              fileName={fileName}
              onClose={() => router.push(pathname)}
            />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default LeadFormModal;
