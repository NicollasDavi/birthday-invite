"use client"
import Header from './components/Header';
import InviteDetails from './components/InviteDetails';
import RSVPSection from './components/RSVPButton';
import GiftList from './components/GiftList';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <InviteDetails />
      <RSVPSection />
      <GiftList />
    </div>
  );
};

export default Home;
