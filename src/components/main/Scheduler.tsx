/* eslint-disable operator-linebreak */
import styled from '@emotion/styled';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
  border: 1px solid rgba(128, 128, 128, 0.6);
  border-radius: 18px 18px 18px 18px;
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
  const router = useRouter();
  const [nowDate, setNowDate] = useState<Date>(new Date());
  const [daily, setDaily] = useState<IRoutine[]>();
  // const id =
  //   typeof window !== 'undefined' ? Number(localStorage?.getItem('id')) : null;
  const [id, setId] = useState(0);
  const { data: CharacterData } = GetCharacter(id);
  const mandalartId = CharacterData?.[0]?.id ?? 0;
  useEffect(() => {
    const storedId = Number(localStorage.getItem('id'));
    if (storedId) {
      setId(Number(storedId));
    } else {
      router.push('/');
    }
  }, []);
  const { mutate: searchRoutineMutate } = useCustomMutation(
    'post',
    '/routine/view',
    {
      onSuccess: (data: IRoutinesResponse) => {
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
      <Head>
        <title>만다르트 스케쥴</title>
        <meta name="description" content="만다라트 스케쥴" />
        <meta name="keywords" content="만다라트,mandalart,scheduler,daily" />
      </Head>
      <TodayMission onNowDateChange={handleNowDate} />
      <MissionList>
        {daily?.map(
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
