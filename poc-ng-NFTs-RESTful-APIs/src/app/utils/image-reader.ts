import { ReplaySubject } from "rxjs";

export class ImageReader {

    public static createImageFromBlob(image: Blob): ReplaySubject<(string | ArrayBuffer | null)> {
        var replaySubject = new ReplaySubject<(string | ArrayBuffer | null)>(1);

        if (image) {
            console.log("createImageFromBlob -> OK");
            let reader = new FileReader();

            reader.addEventListener( //todo?: remove eventHandler and dispose?
                "load",
                () => {
                    console.log("createImageFromBlob -> reader.load event -> OK");
                    replaySubject.next(reader.result);
                },
                false);

            reader.readAsDataURL(image);
        }
        return replaySubject;
    }

    // //old working code
    // public imageToShow: any;
    // createImageFromBlob(image: Blob) {
    //   let reader = new FileReader();

    //   reader.addEventListener(
    //     "load",
    //     () => { this.imageToShow = reader.result; },
    //     false);

    //   if (image) {
    //     reader.readAsDataURL(image);
    //   }
    // }
}