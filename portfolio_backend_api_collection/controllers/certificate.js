const CertificateModel = require("../models/certificate");
const {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} = require("firebase/firestore");

const totalNumberOfCertificates = async () => {
  const db = getFirestore();

  const querySnapShot = await getDocs(collection(db, "certificates"));

  return querySnapShot;
};

exports.addCertificate = (req, res) => {
  const certificateModel = new CertificateModel(req.body.certificate);

  const db = getFirestore();

  setDoc(
    doc(db, "certificates", Date.now().toString()),
    certificateModel.toJSON(),
    {
      merge: true,
    }
  )
    .then(() => {
      res.status(200).json({
        code: 200,
        message: "Certificate Added Successfully",
      });
    })
    .catch((error) => {
      console.error("Error getting documents: ", error);
      res.status(500).json({
        code: 500,
        error: "Error Adding Certificate",
      });
    });
};

exports.getAllCertificates = async (req, res) => {
  totalNumberOfCertificates()
    .then((querySnapShot) => {
      const certificates = [];
      querySnapShot.forEach((doc) => {
        const c_data = doc.data();
        c_data["id"] = doc.id;
        certificates.push(c_data);
      });

      res.status(200).json(certificates.reverse());
    })
    .catch((error) => {
      console.error("Error getting documents: ", error);
      res.status(500).json({
        error: "Error Getting Certificates",
      });
    });
};

exports.deleteCertificate = (req, res) => {
  const db = getFirestore();

  deleteDoc(doc(db, "certificates", req.params.certificateId))
    .then(() => {
      res.status(200).json({
        message: "Certificate Deleted Successfully",
      });
    })
    .catch((error) => {
      console.error("Error getting documents: ", error);
      res.status(500).json({
        error: "Certificate Deletion Error",
      });
    });
};
