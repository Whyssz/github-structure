import { cards } from '../../app/data';

export default function handler(req, res) {
  res.status(200).json(cards.find((card) => card._id === req.query.id));
}
