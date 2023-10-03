'use client'

import { SearchResult } from "@/app/gallery/page";
import { CloudinaryImage } from "@/components/cloudianryImage";
import { ImageGrid } from "@/components/image-grid";


export default function AlbumGrid({images}: {images: SearchResult[]}) {

    return (


        <ImageGrid 
            images={images}
            getImage={(imageData: SearchResult) => {
                return (
                    <CloudinaryImage 
                key={imageData.public_id}
                imageData={imageData}
                width="400"
                height="300"
                alt="image of something"
            />
                )
            }}
        />

    )
}

