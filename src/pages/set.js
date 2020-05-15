import React from 'react';

 //データの格納
  let submitData = {
    title:'',
    content:'',
    category:'',
  };
  let submitDataJSON = JSON.stringify(submitData);
  console.log(submitDataJSON);


class Set extends React.Component {
    handleToList = () => {
        this.props.history.push('/')
      }
    handleToSet = () => {
      this.props.history.push('/set')
    }

      constructor(props) {
        super(props);
        this.state = {
          //textareaのstate管理
          title:'',
          content:'',
          category:'',
        };
      }
      
      //onChangeの際のメソッド
      handleTitleChange(event){
        //入力値を取得する(event.target.valueは定型)
        const inputValue=event.target.value;
        //入力値でstateを更新
        this.setState({title:inputValue});
      }
      handleContentChange(event2){
        const inputValue=event2.target.value;
        this.setState({content:inputValue});
      }
      handleCategoryChange(event3){
        const inputValue=event3.target.value;
        this.setState({category:inputValue});
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
                {/*valueで入力値とstateを紐づける、 onChangeでeventを引数にしてhandleTitleChangeメソッドを呼び出す*/}
                <textarea value={this.state.title} onChange={(event)=>{this.handleTitleChange(event)} } ></textarea>
                <p>内容</p>
                <textarea value={this.state.content} onChange={(event2)=>{this.handleContentChange(event2)} }></textarea>
                <p>カテゴリ</p>
                <textarea value={this.state.category} onChange={(event3)=>{this.handleCategoryChange(event3)} }></textarea>
                <br /><input type="submit" value="送信" onclick={(clickEvent)=>{this.SubmitClick(clickEvent)}} />
            </div>
        );
    }
}

  export default Set;
  