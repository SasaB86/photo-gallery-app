'use client'
import cloudinary from "cloudinary"
import { CloudinaryImage } from "../../components/cloudianryImage";
import { SearchResult } from "../gallery/page";
import { ForceRefresh } from "@/components/force-refresh";
import { useState, useEffect } from 'react'
import { ImageGrid } from "@/components/image-grid";


export default function FavoritesList({initialResources}: {initialResources: SearchResult[]}) {

  const [resources, setResources] = useState(initialResources)

  useEffect(()=>{setResources(initialResources)}, [initialResources])

    return (
        <ImageGrid images={resources}
        getImage={(imageData: SearchResult) => {
            return (
                <CloudinaryImage 
                key={imageData.public_id}
                imageData={imageData}
                width="400"
                height="300"
                alt="image of something"
                onUnheart={(unheartedResource) => {
                    setResources((currentResources) => currentResources.filter(
                        (resource) => resource.public_id !== unheartedResource.public_id
                    ))
                }}
            />
            )
        }}
        />

            

    )
}

