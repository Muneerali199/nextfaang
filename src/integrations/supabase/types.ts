export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      api_cache: {
        Row: {
          cache_key: string
          created_at: string
          data: Json
          expires_at: string
          id: string
        }
        Insert: {
          cache_key: string
          created_at?: string
          data: Json
          expires_at: string
          id?: string
        }
        Update: {
          cache_key?: string
          created_at?: string
          data?: Json
          expires_at?: string
          id?: string
        }
        Relationships: []
      }
      bot_matches: {
        Row: {
          bot_difficulty: string
          bot_score: number | null
          created_at: string
          end_time: string | null
          id: string
          player_id: string
          player_score: number | null
          problems: Json
          start_time: string | null
          status: string
          updated_at: string
        }
        Insert: {
          bot_difficulty?: string
          bot_score?: number | null
          created_at?: string
          end_time?: string | null
          id?: string
          player_id: string
          player_score?: number | null
          problems: Json
          start_time?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          bot_difficulty?: string
          bot_score?: number | null
          created_at?: string
          end_time?: string | null
          id?: string
          player_id?: string
          player_score?: number | null
          problems?: Json
          start_time?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      codeforces_users: {
        Row: {
          country: string | null
          created_at: string
          handle: string
          id: string
          last_updated: string
          max_rank: string | null
          max_rating: number | null
          rank: string | null
          rating: number | null
        }
        Insert: {
          country?: string | null
          created_at?: string
          handle: string
          id?: string
          last_updated?: string
          max_rank?: string | null
          max_rating?: number | null
          rank?: string | null
          rating?: number | null
        }
        Update: {
          country?: string | null
          created_at?: string
          handle?: string
          id?: string
          last_updated?: string
          max_rank?: string | null
          max_rating?: number | null
          rank?: string | null
          rating?: number | null
        }
        Relationships: []
      }
      duel_requests: {
        Row: {
          created_at: string
          id: string
          match_type: string
          problems: Json | null
          receiver_cf_handle: string
          sender_id: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          match_type?: string
          problems?: Json | null
          receiver_cf_handle: string
          sender_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          match_type?: string
          problems?: Json | null
          receiver_cf_handle?: string
          sender_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      matches: {
        Row: {
          created_at: string
          ended_at: string | null
          id: string
          player1_id: string
          player2_id: string
          problem_difficulty: string
          problem_id: string
          problem_title: string
          started_at: string
          status: string
          winner_id: string | null
        }
        Insert: {
          created_at?: string
          ended_at?: string | null
          id?: string
          player1_id: string
          player2_id: string
          problem_difficulty: string
          problem_id: string
          problem_title: string
          started_at?: string
          status?: string
          winner_id?: string | null
        }
        Update: {
          created_at?: string
          ended_at?: string | null
          id?: string
          player1_id?: string
          player2_id?: string
          problem_difficulty?: string
          problem_id?: string
          problem_title?: string
          started_at?: string
          status?: string
          winner_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "matches_player1_id_fkey"
            columns: ["player1_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "matches_player2_id_fkey"
            columns: ["player2_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "matches_winner_id_fkey"
            columns: ["winner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      profiles: {
        Row: {
          country: string | null
          created_at: string
          id: string
          losses: number
          rating: number
          total_matches: number
          updated_at: string
          user_id: string
          username: string
          wins: number
        }
        Insert: {
          country?: string | null
          created_at?: string
          id?: string
          losses?: number
          rating?: number
          total_matches?: number
          updated_at?: string
          user_id: string
          username: string
          wins?: number
        }
        Update: {
          country?: string | null
          created_at?: string
          id?: string
          losses?: number
          rating?: number
          total_matches?: number
          updated_at?: string
          user_id?: string
          username?: string
          wins?: number
        }
        Relationships: []
      }
      room_participants: {
        Row: {
          cf_handle: string | null
          id: string
          joined_at: string
          problems_solved: number | null
          room_id: string
          submission_time: string | null
          total_time_seconds: number | null
          user_id: string
        }
        Insert: {
          cf_handle?: string | null
          id?: string
          joined_at?: string
          problems_solved?: number | null
          room_id: string
          submission_time?: string | null
          total_time_seconds?: number | null
          user_id: string
        }
        Update: {
          cf_handle?: string | null
          id?: string
          joined_at?: string
          problems_solved?: number | null
          room_id?: string
          submission_time?: string | null
          total_time_seconds?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "room_participants_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      rooms: {
        Row: {
          created_at: string
          creator_cf_handle: string | null
          creator_id: string
          end_time: string | null
          id: string
          max_participants: number
          opponent_cf_handle: string | null
          opponent_id: string | null
          problems: Json
          room_code: string
          start_time: string | null
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          creator_cf_handle?: string | null
          creator_id: string
          end_time?: string | null
          id?: string
          max_participants?: number
          opponent_cf_handle?: string | null
          opponent_id?: string | null
          problems?: Json
          room_code: string
          start_time?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          creator_cf_handle?: string | null
          creator_id?: string
          end_time?: string | null
          id?: string
          max_participants?: number
          opponent_cf_handle?: string | null
          opponent_id?: string | null
          problems?: Json
          room_code?: string
          start_time?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_sessions: {
        Row: {
          created_at: string
          id: string
          last_login: string | null
          login_count: number | null
          preferences: Json | null
          session_data: Json
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          last_login?: string | null
          login_count?: number | null
          preferences?: Json | null
          session_data?: Json
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          last_login?: string | null
          login_count?: number | null
          preferences?: Json | null
          session_data?: Json
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      user_signups: {
        Row: {
          country: string | null
          created_at: string
          email: string
          id: string
          updated_at: string
          username: string
        }
        Insert: {
          country?: string | null
          created_at?: string
          email: string
          id?: string
          updated_at?: string
          username: string
        }
        Update: {
          country?: string | null
          created_at?: string
          email?: string
          id?: string
          updated_at?: string
          username?: string
        }
        Relationships: []
      }
      visitor_logs: {
        Row: {
          country: string | null
          id: string
          ip_address: unknown | null
          user_agent: string | null
          visited_at: string
        }
        Insert: {
          country?: string | null
          id?: string
          ip_address?: unknown | null
          user_agent?: string | null
          visited_at?: string
        }
        Update: {
          country?: string | null
          id?: string
          ip_address?: unknown | null
          user_agent?: string | null
          visited_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
