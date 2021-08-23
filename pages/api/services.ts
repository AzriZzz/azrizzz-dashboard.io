import { NextApiRequest, NextApiResponse } from "next";

import { services } from "../../data";

export async function Service(req: NextApiRequest, res: NextApiResponse) {
  // by default get request services
  res.status(200).json({ services });
}
