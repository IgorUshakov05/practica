import {React} from 'react'
const MyMiddleBlock = (props) => {
    console.log(props)
    return (
        <>
        <div className="middleBlockElems">
                <h1>We buy USD at</h1>
                <div className="bloks">
                    <div className="blockCash">
                        <div className="rightBlocks">
                            <img src="/usd.png" width="74" height="49" alt="" />
                            <p className="title">USD</p>
                        </div>
                        <p className="title">{(props.props.USD * 10000 * 0.8).toFixed(2)}</p>
                        </div>
                    <div className="blockCash">
                        <div className="rightBlocks">
                            <img src="/EUR.png" width="74" height="49" alt="" />
                            <p className="title">EUR</p>
                        </div>
                        <p className="title">{(props.props.EUR * 10000 * 0.8).toFixed(2)}</p>
                    </div><div className="blockCash">
                        <div className="rightBlocks">
                            <img src="/gbp.png" width="74" height="49" alt="" />
                            <p className="title">GBP</p>
                        </div>
                        <p className="title">{(props.props.GBP * 10000 * 0.8).toFixed(2)}</p>
                    </div><div className="blockCash">
                        <div className="rightBlocks">
                            <img src="/CNY.png" width="74" height="49" alt="" />
                            <p className="title">CNY</p>
                        </div>
                        <p className="title">{(props.props.CNY * 100 * 0.8).toFixed(2)}</p>
                    </div>
                </div>
            </div>
            <div className="middleBlockElems mt-50">
                <h1 style={{color:"red"}}>We sell USD at</h1>
                <div className="bloks">
                    <div className="blockCash">
                        <div className="rightBlocks">
                            <img src="/usd.png" width="74" height="49" alt="" />
                            <p className="title">USD</p>
                        </div>
                        <p className="title">{(props.props.USD * 10000).toFixed(2)}</p>
                    </div>
                    <div className="blockCash">
                        <div className="rightBlocks">
                            <img src="/EUR.png" width="74" height="49" alt="" />
                            <p className="title">EUR</p>
                        </div>
                        <p className="title">{(props.props.EUR * 10000).toFixed(2)}</p>
                    </div><div className="blockCash">
                        <div className="rightBlocks">
                            <img src="/gbp.png" width="74" height="49" alt="" />
                            <p className="title">GBP</p>
                        </div>
                        <p className="title">{(props.props.GBP * 10000).toFixed(2)}</p>
                    </div><div className="blockCash">
                        <div className="rightBlocks">
                            <img src="/CNY.png" width="74" height="49" alt="" />
                            <p className="title">CNY</p>
                        </div>
                        <p className="title">{(props.props.CNY * 100).toFixed(2)}</p>
                    </div>
                </div>
            </div>
            </>
    )
}

export default MyMiddleBlock