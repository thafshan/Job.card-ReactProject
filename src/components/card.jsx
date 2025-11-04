
import {Bookmark} from 'lucide-react'

const card = (props) => {
  return (
    <div className="card">
        <div>
                  <div className="top">
          <img src={props.logo} alt="" />
          <button>Save <Bookmark size={10} /></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.date}</span></h3>
          <h2>{props.role}</h2>
          <div className='tag'>
            <h4>{props.tg1}</h4>
            <h4>{props.tg2}</h4>
          </div>
        </div>
        </div>
        <div className="bottom">
          <div> 
              <h3>{props.pay}/hr</h3>
              <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default card
