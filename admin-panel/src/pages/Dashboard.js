import MessageList from '../components/MessageList';

function Dashboard() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
            <MessageList />
        </div>
    );
}

export default Dashboard;
