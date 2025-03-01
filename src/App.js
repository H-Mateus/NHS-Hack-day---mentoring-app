import { useState } from "react";
import { Home, Calendar, FileText, BookOpen, User } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function MenteeDashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [meetingOpen, setMeetingOpen] = useState(false);
  const [location, setLocation] = useState("Online");
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState({ buy: "", have: "", feel: "" });
  const addGoal = () => {
    if (newGoal.buy && newGoal.have && newGoal.feel) {
      setGoals([...goals, newGoal]);
      setNewGoal({ buy: "", have: "", feel: "" });
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-green-600 text-white p-4 text-xl font-bold text-center">
        Mentee Dashboard
      </header>
      {/* Main Content */}
      <div className="flex flex-col flex-grow p-4">
        {/* Upcoming Meetings */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h2 className="text-lg font-semibold mb-2">Upcoming Meeting</h2>
          <button
            className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg w-full"
            onClick={() => setMeetingOpen(true)}
          >
            View Meeting Details
          </button>
        </div>
        {/* Notes Section */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h2 className="text-lg font-semibold mb-2">Notes</h2>
          <textarea
            className="border p-2 w-full rounded-lg"
            rows="3"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write your notes here..."
          />
        </div>
      </div>
      {/* Meeting Details Modal */}
      {meetingOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Meeting Details</h2>
            <div className="mb-2">
              <label className="block font-semibold">Date & Time</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="border p-2 w-full rounded-lg"
              />
            </div>
            <div className="mb-2">
              <label className="block font-semibold">Location</label>
              <select
                className="border p-2 w-full rounded-lg"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="Online">Online</option>
                <option value="In Person">In Person</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block font-semibold">Meeting Notes</label>
              <textarea className="border p-2 w-full rounded-lg" rows="3" placeholder="Meeting notes..." />
            </div>
            {/* Goals Section */}
            <div className="mb-2">
              <h3 className="text-lg font-semibold mb-2">Meeting Goals</h3>
              {goals.map((goal, index) => (
                <div key={index} className="p-2 border rounded-lg mb-2">
                  <p><strong>Buy:</strong> {goal.buy}</p>
                  <p><strong>I will have:</strong> {goal.have}</p>
                  <p><strong>I will feel:</strong> {goal.feel}</p>
                </div>
              ))}
              <input
                type="text"
                className="border p-2 w-full rounded-lg mb-2"
                placeholder="Buy..."
                value={newGoal.buy}
                onChange={(e) => setNewGoal({ ...newGoal, buy: e.target.value })}
              />
              <input
                type="text"
                className="border p-2 w-full rounded-lg mb-2"
                placeholder="I will have..."
                value={newGoal.have}
                onChange={(e) => setNewGoal({ ...newGoal, have: e.target.value })}
              />
              <input
                type="text"
                className="border p-2 w-full rounded-lg"
                placeholder="I will feel..."
                value={newGoal.feel}
                onChange={(e) => setNewGoal({ ...newGoal, feel: e.target.value })}
              />
              <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg w-full" onClick={addGoal}>
                Add Goal
              </button>
            </div>
            <button
              className="mt-2 bg-red-600 text-white px-4 py-2 rounded-lg w-full"
              onClick={() => setMeetingOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Bottom Navigation */}
      <nav className="bg-white shadow-md p-4 flex justify-around border-t">
        <button className="flex flex-col items-center text-green-600">
          <Home size={24} />
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center text-green-600">
          <Calendar size={24} />
          <span className="text-xs">Cal</span>
        </button>
        <button className="flex flex-col items-center text-green-600">
          <FileText size={24} />
          <span className="text-xs">Notes</span>
        </button>
        <button className="flex flex-col items-center text-green-600">
          <BookOpen size={24} />
          <span className="text-xs">Learn</span>
        </button>
        <button className="flex flex-col items-center text-green-600">
          <User size={24} />
          <span className="text-xs">Profile</span>
        </button>
      </nav>
    </div>
  );
}
