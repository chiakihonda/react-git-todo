import React from 'react';

class Set extends React.Component {
    handleToList = () => {
        this.props.history.push('/')
      }
      handleToSet = () => {
        this.props.history.push('/set')
      }
      
    render(){
        return(
            <div className="setPage">
                <header>
              <button onClick={this.handleToList}>List(active)</button>
              <button onClick={this.handleToSet}>Set</button>
              <h1>登録画面</h1>
            </header>
                <p>タイトル</p>
                <textarea></textarea>
                <p>内容</p>
                <textarea></textarea>
                <p>カテゴリ</p>
                <textarea></textarea>
            </div>
        );
    }
  }
  export default Set;
  