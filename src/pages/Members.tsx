import { useState } from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Members = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const members = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "+1234567890", joinedDate: "2024-01-15", activeReservations: 2 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "+1234567891", joinedDate: "2024-02-20", activeReservations: 1 },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "+1234567892", joinedDate: "2024-03-10", activeReservations: 3 },
    { id: 4, name: "Alice Williams", email: "alice@example.com", phone: "+1234567893", joinedDate: "2024-01-25", activeReservations: 0 },
    { id: 5, name: "Charlie Brown", email: "charlie@example.com", phone: "+1234567894", joinedDate: "2024-02-05", activeReservations: 1 },
  ];

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Members</h2>
          <p className="text-muted-foreground">View and manage library members</p>
        </div>

        <Card>
          <CardHeader>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search members by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Joined Date</TableHead>
                  <TableHead>Active Reservations</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="font-medium">{member.name}</TableCell>
                    <TableCell>{member.email}</TableCell>
                    <TableCell>{member.phone}</TableCell>
                    <TableCell>{member.joinedDate}</TableCell>
                    <TableCell>
                      <Badge variant={member.activeReservations > 0 ? "default" : "secondary"}>
                        {member.activeReservations}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Members;
