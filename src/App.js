import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./pages/list";

class App extends React.Component{
  render(){
    return(
      <div className="wrapper">
      <header>
         <button>List(active)</button><button>Set</button>
         <h1>Todo List</h1>
      </header>
      <body>
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
            <tr>
              <td>1</td>
              <td>タイトル1</td>
              <td>内容1内容1</td>
              <td>2020-5-4</td>
              <td>1</td>
              <td><button>お気に入り</button>
                  <button>お気に入り</button>
                  <button>削除</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>タイトル2</td>
              <td>内容2内容2</td>
              <td>2020-5-4</td>
              <td>2</td>
              <td><button>お気に入り</button>
                <button>お気に入り</button>
                <button>削除</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>タイトル3</td>
              <td>内容3内容3</td>
              <td>2020-5-4</td>
              <td>1</td>
              <td><button>お気に入り</button>
                <button>お気に入り</button>
                <button>削除</button></td>
            </tr>
	        </tbody>
        </table>
      </body>
    </div>
    );
  }
}

export default App;
