import { AdminLayout } from "@/components/AdminLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";

const Reservations = () => {
  const reservations = [
    { id: 1, bookTitle: "The Great Gatsby", memberName: "John Doe", reservationDate: "2024-01-15", pickupStatus: "pending", returnStatus: "due" },
    { id: 2, bookTitle: "To Kill a Mockingbird", memberName: "Jane Smith", reservationDate: "2024-01-18", pickupStatus: "picked", returnStatus: "due" },
    { id: 3, bookTitle: "1984", memberName: "Bob Johnson", reservationDate: "2024-01-20", pickupStatus: "picked", returnStatus: "overdue" },
    { id: 4, bookTitle: "Pride and Prejudice", memberName: "Alice Williams", reservationDate: "2024-01-22", pickupStatus: "pending", returnStatus: "due" },
  ];

  const handlePickupUpdate = (id: number) => {
    toast.success("Pickup status updated!");
  };

  const handleReturnUpdate = (id: number) => {
    toast.success("Return status updated!");
  };

  const getPickupBadgeVariant = (status: string) => {
    return status === "picked" ? "default" : "secondary";
  };

  const getReturnBadgeVariant = (status: string) => {
    if (status === "returned") return "default";
    if (status === "overdue") return "destructive";
    return "secondary";
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Reservations</h2>
          <p className="text-muted-foreground">Track and manage book reservations</p>
        </div>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">All Reservations</h3>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Book Title</TableHead>
                  <TableHead>Member Name</TableHead>
                  <TableHead>Reservation Date</TableHead>
                  <TableHead>Pickup Status</TableHead>
                  <TableHead>Return Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reservations.map((reservation) => (
                  <TableRow key={reservation.id}>
                    <TableCell className="font-medium">{reservation.bookTitle}</TableCell>
                    <TableCell>{reservation.memberName}</TableCell>
                    <TableCell>{reservation.reservationDate}</TableCell>
                    <TableCell>
                      <Badge variant={getPickupBadgeVariant(reservation.pickupStatus)}>
                        {reservation.pickupStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getReturnBadgeVariant(reservation.returnStatus)}>
                        {reservation.returnStatus}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        {reservation.pickupStatus === "pending" && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handlePickupUpdate(reservation.id)}
                          >
                            Mark Picked
                          </Button>
                        )}
                        {reservation.pickupStatus === "picked" && reservation.returnStatus !== "returned" && (
                          <Button
                            size="sm"
                            onClick={() => handleReturnUpdate(reservation.id)}
                          >
                            Mark Returned
                          </Button>
                        )}
                      </div>
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

export default Reservations;
