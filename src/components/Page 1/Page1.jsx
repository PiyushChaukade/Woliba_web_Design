import "./Page1.css";
import Polygon from "../../assets/Polygon.jpg";
import indus from "../../assets/indus.jpg";
import heart from "../../assets/Heart.jpg";
import todo from "../../assets/list todo.jpg";
import table from "../../assets/table.jpg";
import stress from "../../assets/stress.jpg";
import run from "../../assets/run.jpg";
import seat from "../../assets/seat.png";
import womb from "../../assets/womb.jpg";
import Apple from "../../assets/apple.jpg";
import floww from "../../assets/floww.jpg";
import fire from "../../assets/Fire.jpg";

function Page1() {
  return (
    <>
      <div className="MainContainer">
        <div className="c1">
          <span className="s1">Wellness Challenges</span>
          <span className="s2"> For a personalized journey to wellbeing</span>
          <div className="c1_1">
            <p>
              Your tailored solution to promote healthy behaviors across all
              dimensions of wellbeing.
            </p>
          </div>
          <div className="c1_vector">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="c1_2">
            <button className="b1">
              <img src={Polygon} />
              WATCH VIDEO
            </button>
            <button className="b2">REQUEST A DEMO</button>
          </div>
        </div>
        <div className="c2">
          <div className="c2_1">
            <div className="c2_1_1">
              <div>
                <img src={indus} />
              </div>
              <div> Total Company Challenges Launch...</div>
            </div>

            <div className="c2_1_2">
              <div className="c2_1_2_1"></div>
              <div className="c2_1_2_2"></div>
            </div>
            <div className="c2_1_3">
              <div className="c2_1_3_1"></div>
              <div className="c2_1_3_2"></div>
            </div>
          </div>

          <div className="c2_2">
            <div className="c2_2_1">Challenges Categories</div>
            <div className="c2_2_2"></div>
            <div className="c2_2_3">
              <div>
                <img src={heart} />
              </div>
              <div>
                <img src={todo} />
              </div>
              <div>
                <img src={table} />
              </div>
              <div>
                <img src={stress} />
              </div>
              <div>
                <img src={run} />
              </div>
              <div>
                <img src={seat} />
              </div>
            </div>
            <div className="c2_2_4"></div>
            <div className="c2_2_5"></div>
          </div>

          <div className="c2_3">
            <div className="c2_3_1">
              <p>Hey Adam, Your company doesn’t hav...</p>
            </div>
            <div className="c2_3_2"></div>

            <div className="c2_3_3">
              <button>Launch A Challenge</button>
            </div>
          </div>

          <div className="c2_4">
            <div className="c2_4_1">
              <img src={womb} />
              <p>Global Challenges Particip...</p>
            </div>
            <div className="c2_4_2">
              <p>All Employee Joined</p>
              <button>1 time</button>
            </div>
          </div>
        </div>
        <div className="c3">
          <div className="c3_1">
            <div className="c3_1_1"></div>
            <div className="c3_1_2"></div>
            <div className="c3_1_3">
              <button>Accept</button>
              <button>Reject</button>
            </div>
          </div>

          <div className="c3_2">
            <div className="c3_2_1">Global Challenges</div>
            <div className="c3_2_2">
              <img src={floww} />
              <div>
                <div className="c3_2_2_1"></div>
                <div className="c3_2_2_2"></div>
                <div className="c3_2_2_3"></div>
              </div>
            </div>
            <div className="c3_2_3">
              <button>Join Challenge</button>
            </div>
          </div>

          <div className="c3_3">
            <img src={Apple} />

            <div className="c3_3_1">
              <div className="c3_3_1_1"></div>
              <div className="c3_3_1_2">Last Sync 1 Day 23 Hour Ago</div>
            </div>
          </div>

          <div className="c3_4">
            <div className="c3_4_1">My Fitness Score</div>
            <div className="c3_4_2">
              <img src={fire} />
              <div>
                <p>Total Calories Burned</p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Page1;
