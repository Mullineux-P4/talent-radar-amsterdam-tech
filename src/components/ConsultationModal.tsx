
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, Mail, Calendar, MessageSquare } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-slate-900 border-slate-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <p className="text-gray-300">
            Ready to discuss your hiring challenges? Choose how you'd like to connect with our team.
          </p>
          
          <div className="grid gap-4">
            <div className="flex items-center gap-3 p-4 border border-slate-700 rounded-lg hover:border-blue-500 transition-colors cursor-pointer">
              <Phone className="h-5 w-5 text-blue-400" />
              <div>
                <div className="font-semibold">Quick Call</div>
                <div className="text-sm text-gray-400">+31 20 123 4567</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 border border-slate-700 rounded-lg hover:border-purple-500 transition-colors cursor-pointer">
              <Mail className="h-5 w-5 text-purple-400" />
              <div>
                <div className="font-semibold">Email Us</div>
                <div className="text-sm text-gray-400">hello@projekt4.nl</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 border border-slate-700 rounded-lg hover:border-green-500 transition-colors cursor-pointer">
              <Calendar className="h-5 w-5 text-green-400" />
              <div>
                <div className="font-semibold">Book 30-min Strategy Call</div>
                <div className="text-sm text-gray-400">Available this week</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-4">
            <Label htmlFor="message" className="text-sm font-medium">
              Tell us about your hiring challenge (optional)
            </Label>
            <textarea 
              id="message"
              className="w-full mt-2 p-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 resize-none"
              rows={3}
              placeholder="e.g., Looking for a Senior React Developer for our fintech scale-up..."
            />
          </div>
          
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            onClick={onClose}
          >
            Send Message
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
