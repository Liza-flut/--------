import { input } from "@nextui-org/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
    import { useStorageUpload } from "@thirdweb-dev/react";

    import { MediaRenderer } from "@thirdweb-dev/react";
    import { useState } from "react";

    export default function upload() {
    const { mutateAsync: upload } = useStorageUpload();
    const [files, setFiles] = useState([])
    const storage = new ThirdwebStorage({
      clientId: "67f9d109194f7343d2c9a621f0ef549f", 
    });
    const uploadData = async () => {
        const dataToUpload = files;

        const uris = await storage.upload({ data: dataToUpload , options: { uploadWithGatewayUrl: true }});
    }
    return (
      <>
        <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />
        <button onClick={uploadData} >Upload</button>
        <MediaRenderer src="ipfs://QmW5V9bWvSxai1fNp8E6DbTBgWudihW4ks3jdRGiv4XmKV/0" />
        </>
    );
    }
