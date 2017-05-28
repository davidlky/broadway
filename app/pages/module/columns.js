import {observable} from 'mobx';

var columnsDefinition = observable([
  {
    name:'Show',
    value:(el) => el.Show,
    filter:(filter, el) => {el.Show.indexOf(filter)>-1},
    shown:true
  },
  {
    name:'Theatre',
    value:(el) => el.Theater,
    filter:(filter, el) => {el["Theater"].indexOf(filter)>-1},
    shown:true
  },
  {
    name:'First Preview Date',
    value:(el) => el["First Preview Date"],
    filter:false,
    shown:false
  },
  {
    name:'Closing Date',
    value:(el) => el["Closing Date"],
    filter:false,
    shown:true
  },
  {
    name:'Performance Schedule (not including holidays)',
    value:(el) => el["Schedule"],
    filter:false,
    shown:true
  },
  {
    name:"Today's Schedule",
    value:(el) => "TODO",
    filter:false,
    shown:true
  },
  {
    name:"Cheapest Tickets",
    value:(el) => el["Tickets"],
    filter:false,
    shown:true
  }
]);

export default columnsDefinition.reduce((prev, el) => {
  if (el.shown){
    prev.shown.push(el);
  }else{
    prev.hidden.push(el);
  }
  prev.columns.push(el);
  return prev;
}, {
  shown:[],
  hidden:[],
  columns:[]
})