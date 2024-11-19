import v4 from 'uuid'
let services = [];

const getAllServices = (req, res) => {
  res.json(services);
}

const createService = (req, res) => {
  const { name, imageURL, desc } = req.body;

  const newService = {
    id: v4(),
    name: name,
    imageURL: imageURL,
    desc: desc
  }

  services = [...services, newService];
}

const editService = (req, res) => {
  const id = req.params.id; // TODO: need to make sure where id comes from

  const updatedService = services.find(service => service.id === id);

  console.log(`updatedService ${updatedService}`);

  const { name, imageURL, desc } = req.body;

  if (name) updatedService.name = name;
  if (imageURL) updatedService.imageURL = imageURL;
  if (desc) updatedService.desc = desc;

}

const deleteService = (req, res) => {
  const id = req.params.id;

  const updatedServices = services.filter(service => service.id !== id);

  services = [...updatedServices];
}


export default { getAllServices, createService, editService, deleteService }