import styled from 'styled-components';
import { Carousel } from '../components/Home/Carousel';
import { ChartSlide } from '../components/Home/ChartSlide';
import { ChartVideo } from '../components/Home/ChartVideo';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(import.meta.env.VITE_MAIN_URL
, import.meta.env.VITE_MAIN_KEY);
const allData = await supabase.from('posts').select().order('date', { ascending: false }).range(0, 9);
const concertData = await supabase
  .from('posts')
  .select()
  .eq('category', '공연(정보,후기)')
  .order('date', { ascending: false })
  .range(0, 9);
const recommendData = await supabase
  .from('posts')
  .select()
  .eq('category', '추천음악')
  .order('date', { ascending: false })
  .range(0, 9);
const freeData = await supabase
  .from('posts')
  .select()
  .eq('category', '자유')
  .order('date', { ascending: false })
  .range(0, 9);

const Home = () => {
  return (
    <>
      <StChartContainer>
        <ChartSlide />
        <ChartVideo />
      </StChartContainer>
      <Carousel category={'전체'} data={allData.data} target={'all'}></Carousel>
      <Carousel category={'공연(정보,후기)'} data={concertData.data} target={'concert'}></Carousel>
      <Carousel category={'추천음악'} data={recommendData.data} target={'recommend'}></Carousel>
      <Carousel category={'자유'} data={freeData.data} target={'free'}></Carousel>
    </>
  );
};

export default Home;

const StChartContainer = styled.div`
  max-width: 1400px;
  display: flex;
  flex-wrap: wrap;
  margin: 30px auto;
`;
