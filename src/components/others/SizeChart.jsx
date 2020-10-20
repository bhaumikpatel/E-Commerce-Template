import React from "react";

const SizeChart = (props) => {
  return (
    <React.Fragment>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <tbody>
            <tr>
              <th>Size</th>
              <th>Chest</th>
              <th>Brand Size</th>
              <th>Shoulder</th>
              <th>Length</th>
              <th>Sleeve Length</th>
            </tr>
            <tr>
              <td>S</td>
              <td>39.2</td>
              <td>S</td>
              <td>17</td>
              <td>29.5</td>
              <td>25</td>
            </tr>
            <tr>
              <td>M</td>
              <td>40.8</td>
              <td>M</td>
              <td>17.7</td>
              <td>29.9</td>
              <td>25.5</td>
            </tr>
            <tr>
              <td>L</td>
              <td>42.4</td>
              <td>L</td>
              <td>18.5</td>
              <td>30.3</td>
              <td>25.9</td>
            </tr>
            <tr>
              <td>XL</td>
              <td>45.6</td>
              <td>XL</td>
              <td>19.2</td>
              <td>30.7</td>
              <td>26.3</td>
            </tr>
            <tr>
              <td>XXL</td>
              <td>48.8</td>
              <td>XXL</td>
              <td>20</td>
              <td>31</td>
              <td>26.7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default SizeChart;
