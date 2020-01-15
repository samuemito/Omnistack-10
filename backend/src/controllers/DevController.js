import axios from 'axios';
import Dev from "../models/Dev.js";
import parseStrArr from '../utils/parseStrAsArr.js';

export default {
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });
    if(dev !== null) return res.json(dev);

    const response = await axios.get(`https://api.github.com/users/${github_username}`);
  
    const { name = login, avatar_url, bio } = response.data;
    const newTechs = parseStrArr(techs);
  
    const location = {
      type: 'Point',
      coordinates: [latitude, longitude]
    };
  
    dev = await Dev.create({
      name,
      github_username,
      bio,
      avatarURL: avatar_url,
      techs: newTechs,
      location
    });
  
    return res.json(dev);
  },
  async index(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
  },
  async delete(req, res) {
    const { id } = req.params;
    console.log("Deletei: "+id);
    await Dev.findOneAndDelete({ _id: id });
    const re = await Dev.find();
    return res.json(re);
  }
}