import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import TodayMission from './TodayMission';
import Mission from './Mission';
import AddMission from './AddMission';
import {
  GetCharacter,
  IRoutine,
  IRoutinesResponse,
} from '@/pages/api/main/test';
import { useCustomMutation } from '@/hooks/reactQueryHooks/reactQueryHooks';

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
const Scheduler = () => {
  const [nowDate, setNowDate] = useState<Date>(new Date());
  const [daily, setDaily] = useState<IRoutine[]>([]);
  const id = Number(localStorage.getItem('id'));
  const { data: CharacterData } = GetCharacter(id);
  const mandalartId = CharacterData?.[0]?.id ?? 0;

  const { mutate: searchRoutineMutate } = useCustomMutation(
    'post',
    '/routine/view',
    {
      onSuccess: (data: IRoutinesResponse) => {
        console.log(data.routines);
        setDaily(data.routines);
      },
    }
  );

  const handleRoutine = () => {
    searchRoutineMutate({
      userId: id,
      mandalartId,
      routineDate: nowDate,
    });
  };
  const handleNowDate = (newDate: Date) => {
    setNowDate(newDate);
  };
  useEffect(() => {
    handleRoutine();
  }, [mandalartId, nowDate]);
  return (
    <SchedulerMain>
      <TodayMission onNowDateChange={handleNowDate} />
      <MissionList>
        {daily.map(
          (data) => (
            // if (!data.isChecked) {
            <Mission
              key={data.id}
              data={data}
              onChangeRoutine={handleRoutine}
            />
          )
          // }
          // return null;
        )}
      </MissionList>
      <AddMission onChangeRoutine={handleRoutine} />
    </SchedulerMain>
  );
};
export default Scheduler;
