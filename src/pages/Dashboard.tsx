import { AdminLayout } from "@/components/AdminLayout";
import { StatCard } from "@/components/StatCard";
import { BookOpen, BookCheck, BookX, Users, Calendar, Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const stats = [
    { title: "Total Books", value: "1,234", icon: BookOpen, description: "In library collection" },
    { title: "Books Available", value: "892", icon: BookCheck, description: "+12 from last week" },
    { title: "Books Booked", value: "342", icon: BookX, description: "Currently borrowed" },
    { title: "Total Members", value: "567", icon: Users, description: "+23 new this month" },
    { title: "Active Reservations", value: "89", icon: Calendar, description: "Pending pickup" },
  ];

  const recentActivity = [
    { title: "New member registration", member: "John Doe", time: "2 minutes ago" },
    { title: "Book returned", book: "The Great Gatsby", time: "15 minutes ago" },
    { title: "New reservation", book: "1984 by George Orwell", time: "1 hour ago" },
    { title: "Book borrowed", book: "To Kill a Mockingbird", time: "2 hours ago" },
  ];

  const overdueBooks = [
    { book: "Pride and Prejudice", member: "Jane Smith", daysOverdue: 5 },
    { book: "The Catcher in the Rye", member: "Bob Johnson", daysOverdue: 3 },
    { book: "Brave New World", member: "Alice Williams", daysOverdue: 2 },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Overview of your library management system</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Recent Activity
              </CardTitle>
              <CardDescription>Latest updates from your library</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.member || activity.book}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookX className="h-5 w-5" />
                Overdue Books
              </CardTitle>
              <CardDescription>Books that need immediate attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {overdueBooks.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{item.book}</p>
                      <p className="text-sm text-muted-foreground">{item.member}</p>
                    </div>
                    <Badge variant="destructive">{item.daysOverdue} days</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
