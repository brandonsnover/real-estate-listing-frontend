import { HomesNew } from "./HomesNew";
import { HomesIndex } from "./HomesIndex";

export function Content() {
  let homes = [
    {
      id: 1,
      address: "123 Main St",
      price: "$460,000",
      image_url:
        "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
    },
    {
      id: 2,
      address: "4455 Grove St",
      price: "$325,000",
      image_url: "https://ssl.cdn-redfin.com/photo/68/mbphoto/636/genMid.11921636_0.jpg",
    },
    {
      id: 3,
      address: "9923 Circle Ave",
      price: "$723,000",
      image_url:
        "https://www.mydomaine.com/thmb/bepet4VMGUG70sCLFNQRdZm9bbg=/2048x0/filters:no_upscale():strip_icc()/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg",
    },
    {
      id: 4,
      address: "12 Money Ave",
      price: "$12,723,000",
      image_url: "https://cdn.luxe.digital/media/20230126160156/biggest-houses-in-the-world-reviews-luxe-digital.jpg",
    },
    {
      id: 5,
      address: "4499 Temple St",
      price: "$90,000",
      image_url: "https://images.zerodown.com//photos/33664405/655890666/original.jpg?tr=f-auto,w-360,h-270",
    },
    {
      id: 6,
      address: "9923 Circle Ave",
      price: "$723,000",
      image_url:
        "https://www.mydomaine.com/thmb/bepet4VMGUG70sCLFNQRdZm9bbg=/2048x0/filters:no_upscale():strip_icc()/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg",
    },
    {
      id: 7,
      address: "9923 Circle Ave",
      price: "$723,000",
      image_url:
        "https://www.mydomaine.com/thmb/bepet4VMGUG70sCLFNQRdZm9bbg=/2048x0/filters:no_upscale():strip_icc()/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg",
    },
    {
      id: 8,
      address: "9923 Circle Ave",
      price: "$723,000",
      image_url:
        "https://www.mydomaine.com/thmb/bepet4VMGUG70sCLFNQRdZm9bbg=/2048x0/filters:no_upscale():strip_icc()/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg",
    },
    {
      id: 9,
      address: "9923 Circle Ave",
      price: "$723,000",
      image_url:
        "https://www.mydomaine.com/thmb/bepet4VMGUG70sCLFNQRdZm9bbg=/2048x0/filters:no_upscale():strip_icc()/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg",
    },
    {
      id: 10,
      address: "9923 Circle Ave",
      price: "$723,000",
      image_url:
        "https://www.mydomaine.com/thmb/bepet4VMGUG70sCLFNQRdZm9bbg=/2048x0/filters:no_upscale():strip_icc()/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg",
    },
  ];

  return (
    <div>
      <HomesIndex homes={homes} />
      <HomesNew />
    </div>
  );
}
