import { firestore } from "../../../firebase/admin";
export default function (req, res) {
  const { query } = req;
  const { id } = query;

  firestore
    .collection("twities")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data();
      res.json(data);
    })
    .catch(() => {
      res.status(404).send();
    });
}
