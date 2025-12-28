import Header from '../widgets/Header';
import HomePage from '../pages/HomePage';
import Footer from '../widgets/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1 flex flex-col">
        <HomePage />
      </main>

      <Footer />
    </div>
  );
}
