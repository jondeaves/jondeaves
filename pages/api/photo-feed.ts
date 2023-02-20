// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  description: string;
  date: string;
  url: string;
  media: {
    type: string;
    description: string;
    thumbnail: string;
    url: string;
  }[];
}[];

type PixelfedMediaItem = {
  type: string;
  description: string;
  preview_url: string;
  url: string;
};

type PixelfedStatusItem = {
  content: string;
  created_at: string;
  media_attachments: PixelfedMediaItem[];
  url: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const endpoint = `https://pixelfed.social/api/v1/accounts/${process.env.PIXELFED_USER_ID}/statuses`;
  const headers = {
    Authorization: `Bearer ${process.env.PIXELFED_API_TOKEN}`,
  };

  let payload: Data = [];

  try {
    const response = await axios.get<PixelfedStatusItem[]>(endpoint, {
      headers,
    });

    payload = response.data.map((post) => ({
      description: post.content,
      date: post.created_at,
      url: post.url,
      media: post.media_attachments.map((media_attachment) => ({
        type: media_attachment.type,
        description: media_attachment.description,
        thumbnail: media_attachment.preview_url,
        url: media_attachment.preview_url,
      })),
    }));
  } catch (err) {
    console.error(err);
  }

  // curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyMzAxMiIsImp0aSI6IjRmZjQ3MmFiZmI3YzRjNzdlYzBlNmYwYmU1YThjMDIwZTcyNTY4YzQ2MzhhN2Y5ODc1MTQ5MjEyMmIzMTBjYmQ2YzhmNzA4YzBhMzBiNDg3IiwiaWF0IjoxNjU0MjkyOTk4LjM5MTUxLCJuYmYiOjE2NTQyOTI5OTguMzkxNTEzLCJleHAiOjE2ODU4Mjg5OTguMzg4OTc5LCJzdWIiOiI0OTU4NyIsInNjb3BlcyI6WyJyZWFkIl19.FNS37Ed7MuZedSZXthsQIIN0buc2wSw-srfNM8UBW-3M-WTRHG5K5Xt-56314SQ7Fzs5D32aYsoDn0C0_dBjnKLg8JrlMCRVjZ8E5-6PAiP2pRsEPuRvu02oZMyYlu0LVt_IuEuxU14XQ3_A9LwyXMC4IsM8EK9mU19UNXuIcGp6dEbW5yzgRrG2tSHRUlWKorqhcRySGjUm_BgyP0zXrOoirK1u-PlYaDnoh2yfWU3ltBEXHq1vQhidGoYVJm-Y-W9Ehsqnb2ZlnGl_9jY_PXnO7xlbjo7Q9FnvqrGwQ3TNkWkxt9FYhbYl06aa20deUoaF1ljWlWiuXgqJ4gTFVgm3NEsfSZgEv_i0P9DYGwny0py3DVNdmmc4gz29eM7glf161xecRD1tpUmdsp0-bMmF2ZWG_dWK2sMZ14HLYlP9d758zfc0UV_NLFDL4NEOVCUFOHIjuhwR58TMUOo3sClzAZF_vvYQKRs-SlcZ6ojhcAl-1TwDMrMbLDXV9x-LxCo48_k2vLD91qeWwQuNRHJR7gK-o7a-BG2-j_Gk3sI5Jpu4Wg5V6XlgL8bY6RYCjDcetUbtopSSNjMZlwIZZM5QxWetmF5tGSA3L2xvbkay3vPmlZNabnSRxDifgzwwP3t19FEQVlEVWnSV3ZfONQSKVJh65Dmfrp_iCmwAeec" https://pixelfed.social/api/v1/accounts/434122738759434903/statuses
  res.status(200).json(payload);
}
