import { FunctionComponent } from "react";
import { IService } from "../type";

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {

  // how to write markup text
  const createMarkup = () => {
    return {
      __html: about
    }
  }

  return (
    <div className='flex items-center p-2 space-x-2'>
      <Icon className='w-12 h-12 text-purple' />
      <div className='dark:text-white'>
        <h4 className='font-bold'>{title}</h4>
        <p className='text-sm' dangerouslySetInnerHTML={createMarkup()}></p>
      </div>
    </div>
  );
};

export default ServiceCard;

// function ServiceCard({service}) {
//   const { Icon, about, title } = service
//   return (
//     <div>
//       <Icon />
//       <div>
//         <h4>{title}</h4>
//         <p>{about}</p>
//       </div>
//     </div>
//   );
// }

// export default ServiceCard;
