function getclickcount(req,res){
  console.log("succeeded");
  return res.json(["1","2","3"]);
}
/*
const ownerData = [{"id":2,"name":"BBB","address":"gulou","city":"nanjing","telephone":'234567',"pets":[],"new":false},{"id":3,"name":"CCC","address":"rugao","city":"nantong","telephone":"77777","pets":[],"new":false},{"id":4,"name":"DDD","address":"haian","city":"nantong","telephone":"78788","pets":[],"new":false},{"id":5,"name":"EEE","address":"qidong","city":"nantong","telephone":"89898","pets":[],"new":false},{"id":6,"name":"FFF","address":"tiananmen","city":"beijing","telephone":"123456789","pets":[],"new":false},{"id":7,"name":"GGG","address":"badaling","city":"beijing","telephone":"123456","pets":[],"new":false},{"id":8,"name":"HHH","address":"chaoyang","city":"beijing","telephone":"123456","pets":[],"new":false},{"id":9,"name":"III","address":"pudong","city":"shanghai","telephone":"123456","pets":[],"new":false},{"id":10,"name":"JJJ","address":"puxi","city":"shanghai","telephone":"123456","pets":[],"new":false}]
*/
const ownerData = [{
  key: '1',
  id: '1',
  name: 'John',
  address: 'New York No. 1 Lake Park',
  city: 'Nanjing',
  telephone: '123456',
  pets: ['dog', 'cat'],
},
{
  key: '2',
  id: '2',
  name: 'Jim',
  address: 'London No. 1 Lake Park ',
  city: 'Nanjing',
  telephone: '123456',
  pets: ['dog'],
},
{
  key: '3',
  id: '3',
  name: 'Joe',
  address: 'Sidney No. 1 Lake Park',
  city: 'Nanjing',
  telephone: '123456',
  pets: ['dog', 'bird'],
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
  'GET /api/owner/${id}': ownerData,
}
