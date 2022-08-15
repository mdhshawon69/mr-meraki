import AboutUs from "./components/AboutUs/AboutUs";
import Attributes from "./components/Attributes/Attributes";
import Copyright from "./components/Copyright/Copyright";
import FAQsContainer from "./components/FAQs/FAQsContainer";
import Header from "./components/Header/Header";
import JoinCommunity from "./components/JoinCommunity/JoinCommunity";
import NFTcardContainer from "./components/NFTcardContainer/NFTcardContainer";
import RoadMap from "./components/RoadMap/RoadMap";
import SubscriptionArea from "./components/SubscriptionArea/SubscriptionArea";

function App() {
  return (
    <div className='bg-[#0A0F21]'>
      <Header />
      <AboutUs />
      <RoadMap />
      <NFTcardContainer />
      <Attributes />
      <JoinCommunity />
      <FAQsContainer />
      <SubscriptionArea />
      <Copyright />
    </div>
  );
}

export default App;
