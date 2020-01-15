import Dev from '../models/Dev.js';
import parseStrArr from '../utils/parseStrAsArr.js';

export default {
  async index(req, res) {
    const { techs, longitude, latitude } = req.query;

    const techsArray = parseStrArr(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });

    return res.json({ devs });
  }
}