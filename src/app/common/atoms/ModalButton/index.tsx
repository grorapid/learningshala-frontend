import Image from "next/image";
import Typography from "../../atoms/Typography";
import Views from "../../components/Views";
import Button from "../../atoms/Button";
import { AboutCourse } from "../../Interfaces";
import Modal from "../Modal";

const ModalButton = () => {
  //const showModal = searchParams?.modal;
  return (
    <div>
      <Button variant="text" size="medium" className="text-center">
        Show more
      </Button>
      {/* {showModal && <Modal />} */}
    </div>
  );
};

export default ModalButton;
