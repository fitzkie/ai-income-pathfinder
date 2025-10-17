import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Profile, WizardStep } from '@shared/schema';

interface ProfileState {
  currentStep: number;
  profile: Partial<Profile>;
  setStep: (step: number) => void;
  updateProfile: (data: Partial<Profile>) => void;
  resetProfile: () => void;
}

const initialProfile: Partial<Profile> = {
  skills: [],
  interests: [],
  assets: {
    audience: 0,
    budget: 0,
    timePerWeek: 10,
    tools: [],
  },
  network: {
    audienceTypes: [],
  },
  constraints: {
    risk: 'medium',
    onCamera: false,
    timeline: 'normal',
  },
  goals: {
    incomeTarget: 500,
    passiveVsActive: 'balanced',
    b2bVsB2c: 'both',
  },
  workStyle: {
    collaboration: 'flexible',
    deliveryPreference: [],
  },
  marketHunches: [],
};

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      currentStep: 0,
      profile: initialProfile,
      setStep: (step) => set({ currentStep: step }),
      updateProfile: (data) =>
        set((state) => ({
          profile: { ...state.profile, ...data },
        })),
      resetProfile: () => set({ profile: initialProfile, currentStep: 0 }),
    }),
    {
      name: 'ai-income-pathfinder-profile',
    }
  )
);
