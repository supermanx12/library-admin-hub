import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const Settings = () => {
  const handleLibraryInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Library information updated!");
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile updated!");
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">Manage your library and account settings</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Library Information</CardTitle>
            <CardDescription>Update your library's basic information</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLibraryInfoSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="libraryName">Library Name</Label>
                <Input id="libraryName" defaultValue="City Central Library" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" defaultValue="123 Main Street, City, State 12345" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="info@library.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="hours">Opening Hours</Label>
                <Input id="hours" defaultValue="Mon-Fri: 9AM-8PM, Sat-Sun: 10AM-6PM" />
              </div>
              <Button type="submit">Save Changes</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Admin Profile</CardTitle>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleProfileSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Admin" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="User" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="adminEmail">Email</Label>
                <Input id="adminEmail" type="email" defaultValue="admin@library.com" />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </div>
              <Button type="submit">Update Profile</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Settings;
