import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  journeyType?: string;
}

const BookingDialog = ({ open, onOpenChange, journeyType }: BookingDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    partySize: "",
    preferredDates: "",
    dietary: "",
    airport: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your enquiry! We'll be in touch shortly.");
    onOpenChange(false);
    setFormData({ name: "", email: "", phone: "", partySize: "", preferredDates: "", dietary: "", airport: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl italic text-primary">
            {journeyType ? `Book Your ${journeyType}` : "Booking Enquiry"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground font-body text-sm">
            Fill in your details and we'll get back to you to arrange your bespoke experience.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-xs uppercase tracking-[0.1em] font-body text-muted-foreground">Name</Label>
            <Input
              id="name"
              required
              maxLength={100}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-secondary border-border"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs uppercase tracking-[0.1em] font-body text-muted-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-secondary border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-xs uppercase tracking-[0.1em] font-body text-muted-foreground">Phone</Label>
              <Input
                id="phone"
                type="tel"
                maxLength={30}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-secondary border-border"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="partySize" className="text-xs uppercase tracking-[0.1em] font-body text-muted-foreground">Number of People</Label>
              <Input
                id="partySize"
                type="number"
                min="1"
                max="50"
                required
                value={formData.partySize}
                onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                className="bg-secondary border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredDates" className="text-xs uppercase tracking-[0.1em] font-body text-muted-foreground">Preferred Dates</Label>
              <Input
                id="preferredDates"
                required
                maxLength={100}
                placeholder="e.g. June 2026"
                value={formData.preferredDates}
                onChange={(e) => setFormData({ ...formData, preferredDates: e.target.value })}
                className="bg-secondary border-border"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dietary" className="text-xs uppercase tracking-[0.1em] font-body text-muted-foreground">Dietary Requirements</Label>
            <Textarea
              id="dietary"
              maxLength={500}
              placeholder="Any allergies or dietary preferences…"
              value={formData.dietary}
              onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
              className="bg-secondary border-border resize-none"
              rows={3}
            />
          </div>

          <div className="space-y-3 pt-2 border-t border-border">
            <p className="text-sm text-muted-foreground font-body leading-relaxed pt-3">
              If travelling by airplane, the nearest airport is <span className="text-primary font-medium">Perpignan</span>. If it is impossible for you to fly to Perpignan, please choose your nearest available airport:
            </p>
            <Select value={formData.airport} onValueChange={(v) => setFormData({ ...formData, airport: v })}>
              <SelectTrigger className="bg-secondary border-border">
                <SelectValue placeholder="Select an alternative airport" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="carcassonne">Carcassonne</SelectItem>
                <SelectItem value="beziers">Béziers</SelectItem>
                <SelectItem value="montpellier">Montpellier</SelectItem>
                <SelectItem value="toulouse">Toulouse</SelectItem>
                <SelectItem value="girona">Girona (Spain)</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground/70 font-body italic">
              Please note that extra fees are charged for airport pick-up from these airports.
            </p>
          </div>

          <Button
            type="submit"
            variant="expedition"
            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm py-5 mt-4"
          >
            Send Enquiry
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
