import styled from '@emotion/styled';
import TodayMission from './TodayMission';
import Mission from './Mission';
import AddMission from './AddMission';

const Scheduler = () => {
  const SchedulerMain = styled.div`
    display: flex-start;
    flex-direction: column;
    justify-content: center;
    border: 1px solid gray;
    border-radius: 30px 30px 30px 30px;
    width: 100%;
    height: 560px;
  `;
  const MissionList = styled.div`
    display: flex-start;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 374px;
    overflow-y: scroll;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  `;
  return (
    <SchedulerMain>
      <TodayMission />
      <MissionList>
        <Mission />
        <Mission />
        <Mission />
        <Mission />
      </MissionList>
      <AddMission />
    </SchedulerMain>
  );
};
export default Scheduler;
