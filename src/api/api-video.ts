import { slugyfy } from "../helpers/slugHelpers";
import { Video } from "../models/Video";
import { db } from "./database";

export const addVideo = async (video: Video) => {
  console.log(video);
  
  try {
    video.slug = slugyfy(video.title)
    await db.addData("videos", video);
    return {
      isSuccess: true,
      message: "Video added successfuly !",
    };
  } catch (error) {
    console.log({ error });
    return {
      isSuccess: false,
      error,
    };
  }
};
export const updateVideo = async (video: Video) => {
  try {
    await db.updateData("videos", video);
    return {
      isSuccess: true,
      message: "Video updated successfuly !",
    };
  } catch (error) {
    console.log({ error });
    return {
      isSuccess: false,
      error,
    };
  }
};
export const getVideo = async (_id: number) => {
  try {
    const video = await db.getData("videos", _id);
    return {
      isSuccess: true,
      result: video
    };
  } catch (error) {
    console.log({ error });
    return {
      isSuccess: false,
      error,
    };
  }
};
export const getAllVideo = async () => {
  try {
    const videos = await db.getAllData("videos");
    return {
      isSuccess: true,
      results: videos
    };
  } catch (error) {
    console.log({ error });
    return {
      isSuccess: false,
      error,
    };
  }
};
export const deleteVideo = async (_id: number) => {
  try {
   await db.deleteData("videos", _id);
    return {
      isSuccess: true,
      message: "Video deleted successfuly !",
    };
  } catch (error) {
    console.log({ error });
    return {
      isSuccess: false,
      error,
    };
  }
};

export const searchVideoBySlug = async (slug: string) => {
  try {
   const video = await db.search("videos", 'slug', slug);
    return {
      isSuccess: true,
      result: video[0],
    };
  } catch (error) {
    console.log({ error });
    return {
      isSuccess: false,
      error,
    };
  }
};




