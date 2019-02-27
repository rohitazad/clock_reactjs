import React, {Component} from 'react';
export default class LifeCycle extends Component{
    constructor(props){
        super(props);
        //console.log('01. _Constructor called ', props);
        this.state = {
            day:'',
            date:'',
            month:'',
            year:'',
            hour:'',
            minets:'',
            seconds:''
        }
        this.clock = this.clock.bind(this);
    }
    clock(){
        let currentDate = new Date();
        //console.log('call to clocl function');
        this.setState(  {
                day : currentDate.getDay(),
                date: currentDate.getDate(),
                month : currentDate.getMonth() + 1,
                year : currentDate.getFullYear(),
                hour : currentDate.getHours(),
                minets : currentDate.getMinutes(),
                seconds : currentDate.getSeconds()
        })
    }
    splitArrayToHtml(arr){
        //console.log(arr)
        let myArry = arr.toString().split('');
        //console.log(myArry, 'myarrayLenght', myArry.length);
        if(myArry.length === 1){
            myArry = [0,arr];
        }
        return myArry.map((item, index)=>{
            return <span key={index}>{item}</span>
        })
    };

    render(){
        //console.log('02_ Render called here');
        return (
            <div className="">
                    {/* {console.log('03_Return called here', this.props, this.state)} */}
                    <h2>{this.props.date}</h2>
                    <ul className="clock">
                        <li>
                            <div className="dyn-text">
                                {this.splitArrayToHtml(this.state.day)}
                            </div>
                            <div className="state-text">Day</div>
                        </li>
                        <li>
                            <div className="dyn-text">
                                {this.splitArrayToHtml(this.state.date)}
                            </div>
                            <div className="state-text">Date</div>
                        </li>
                        <li>
                            <div className="dyn-text">
                                {this.splitArrayToHtml(this.state.month)}
                            </div>
                            <div className="state-text">Months</div>
                        </li>
                        <li>
                            <div className="dyn-text">
                                {this.splitArrayToHtml(this.state.year)}
                            </div>
                            <div className="state-text">Years</div>
                        </li>
                    </ul>
                    <h2>{this.props.time}</h2>
                    <ul className="clock">
                        <li>
                            <div className="dyn-text">
                                {this.splitArrayToHtml(this.state.hour)}
                            </div>
                            <div className="state-text">Hours</div>
                        </li>
                        <li>
                            <div className="dyn-text">
                                {this.splitArrayToHtml(this.state.minets)}
                             </div>
                            <div className="state-text">Minutes</div>
                        </li>
                        <li>
                            <div className="dyn-text">
                                {this.splitArrayToHtml(this.state.seconds)}
                            </div>
                            <div className="state-text">Seconds</div>
                        </li>
                    </ul>
                    <div className="git-hub-box">
                        Code on <a rel="noopener noreferrer" href="https://github.com/rohitazad/react_youtube" target="_blank">GitHub</a>
                    </div>
            </div>
        );
    }

    componentDidMount() {
        //console.log("componentDidMount TimeComponent Mounted...");
            // this.interval = setInterval(() => this.setState({ 
            //     timeStamp:this.clock() 
            // }), 1000);
            setInterval(()=> {
                this.clock()
            }, 1000)
      }
}