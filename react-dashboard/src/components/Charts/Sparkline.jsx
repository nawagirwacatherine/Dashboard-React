import React from 'react'
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { SparkLineComponent, Inject,} from '@syncfusion/ej2-react-charts';

const  SparkLine = ({ id, height, width, color, data, type, CurrentColor }) => {
  return (
    <div>
      <SparkLineComponent
      id={id}
      height={height}
      width={width}
      linewidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: CurrentColor, width:2}}
      dataSource= {data}
      xName="x"
      yName="y"
      type={type}
      tooltipSettings={{
        visible:true,
        format:'${x}: data &{y}',
        tracklineSettings: {
          visible:true
        }
      }}
      >
        < Inject data-tooltip-id="dashboard-tooltip"
            data-tooltip-content="services"/>
        < Tooltip id="dashboard-tooltip"/>
        

      </SparkLineComponent>
      </div>
  )
}

export default SparkLine
