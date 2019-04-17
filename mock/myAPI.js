function getclickcount(req,res){
  console.log("succeeded");
  return res.json(["1","2","3"]);
}

const ownerData = [{
  key: '1',
  Id: '1',
  Name: 'John',
  Address: 'New York No. 1 Lake Park',
  City: 'Nanjing',
  Telephone: '123456',
  Pets: ['dog', 'cat'],
},
{
  key: '2',
  Id: '2',
  Name: 'Jim',
  Address: 'London No. 1 Lake Park ',
  City: 'Nanjing',
  Telephone: '123456',
  Pets: ['dog'],
},
{
  key: '3',
  Id: '3',
  Name: 'Joe',
  Address: 'Sidney No. 1 Lake Park',
  City: 'Nanjing',
  Telephone: '123456',
  Pets: ['dog', 'bird'],
}];

const petData = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 5',
  },
];

const serviceData = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 5',
  },
];

export default{
  'GET /api/get': getclickcount,
  'GET /api/fetchOwnerData': ownerData,
  'GET /api/fetchPetData': petData,
  'GET /api/fetchServiceData': serviceData,
}
