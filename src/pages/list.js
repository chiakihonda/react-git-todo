import React from 'react';

const todoList= [{
  id:'1',
  title:'タイトル1',
  content:'内容1内容1内容1内容1',
  createAt:'2020-5-04',
  category:'1',
},
{
  id:'2',
  title:'タイトル2',
  content:'内容2内容2内容2内容2',
  createAt:'2020-5-04',
  category:'2',
},
{
  id:'3',
  title:'タイトル3',
  content:'内容3内容3内容3内容3',
  createAt:'2020-5-04',
  category:'1',
}
]

class List extends React.Component {
  constructor(props){
    super(props);
    this.state={
      todoList:todoList
    }
  }
  todoSet(){
    this.setState({
      todoList:[todoList]
      }
    );
  }

      render(){
        console.log("stateTodoList",this.state.todoList);
        return(
          <div className="wrapper">
            <header>
              <button>List(active)</button>
              <button>Set</button>
              <h1>Todo List</h1>
            </header>
            <table className="todo">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>タイトル</th>
                  <th>内容</th>
                  <th>日時</th>
                  <th>カテゴリ</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {this.state.todoList.map((item)=>(
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.content}</td>
                    <td>{item.createAt}</td>
                    <td>{item.category}</td>
                    <td><button>お気に入り</button>
                        <button>お気に入り</button>
                        <button>削除</button></td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
    }
  }

  export default List;