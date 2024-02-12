
import { imgs } from '../layout/contant/imgs/imgs.componen';

export function appendImgs(menuItems: any): any {
    // console.log("a ----> ", menuItems)
    if(menuItems){
        menuItems.forEach((menuItem:any) => {
            const img: any = imgs;
            let imgsName = menuItem.imgName;
            let imgData: any = imgs;
            if(imgsName){
              let imgsLableSplit = imgsName.split('.');
              imgData = img[imgsLableSplit[0]]
              imgsLableSplit.forEach((element:any) => {
                if(imgsLableSplit[0] !== element){
                  let imgLink = imgData[element];
                  imgData = imgLink;
                  menuItem.imgLink = imgLink;
                }
              });
            }
           
          });
          return menuItems
    }
}