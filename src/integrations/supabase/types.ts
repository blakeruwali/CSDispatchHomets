export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      rubric_categories: {
        Row: {
          created_at: string
          id: string
          name: string
          rubric_id: string
          sort_order: number
          weight: number
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          rubric_id: string
          sort_order: number
          weight: number
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          rubric_id?: string
          sort_order?: number
          weight?: number
        }
        Relationships: [
          {
            foreignKeyName: "rubric_categories_rubric_id_fkey"
            columns: ["rubric_id"]
            isOneToOne: false
            referencedRelation: "rubrics"
            referencedColumns: ["id"]
          },
        ]
      }
      rubric_items: {
        Row: {
          category_id: string
          coaching_hints: string | null
          created_at: string
          description: string | null
          id: string
          item_type: string
          label: string
          max_score: number
          sort_order: number
          weight: number
        }
        Insert: {
          category_id: string
          coaching_hints?: string | null
          created_at?: string
          description?: string | null
          id?: string
          item_type: string
          label: string
          max_score: number
          sort_order: number
          weight: number
        }
        Update: {
          category_id?: string
          coaching_hints?: string | null
          created_at?: string
          description?: string | null
          id?: string
          item_type?: string
          label?: string
          max_score?: number
          sort_order?: number
          weight?: number
        }
        Relationships: [
          {
            foreignKeyName: "rubric_items_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "rubric_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      rubrics: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          name: string
          slug: string
          version: number
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          name: string
          slug: string
          version?: number
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          name?: string
          slug?: string
          version?: number
        }
        Relationships: []
      }
      session_ai_reviews: {
        Row: {
          completion_tokens: number | null
          created_at: string
          focus_item_id: string | null
          id: string
          model_used: string | null
          overall_summary: string | null
          per_item_feedback: Json
          prompt_tokens: number | null
          session_id: string
        }
        Insert: {
          completion_tokens?: number | null
          created_at?: string
          focus_item_id?: string | null
          id?: string
          model_used?: string | null
          overall_summary?: string | null
          per_item_feedback: Json
          prompt_tokens?: number | null
          session_id: string
        }
        Update: {
          completion_tokens?: number | null
          created_at?: string
          focus_item_id?: string | null
          id?: string
          model_used?: string | null
          overall_summary?: string | null
          per_item_feedback?: Json
          prompt_tokens?: number | null
          session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "session_ai_reviews_focus_item_id_fkey"
            columns: ["focus_item_id"]
            isOneToOne: false
            referencedRelation: "rubric_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "session_ai_reviews_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      session_item_states: {
        Row: {
          id: string
          item_id: string
          reflection: string | null
          score: number | null
          scored_at: string | null
          session_id: string
        }
        Insert: {
          id?: string
          item_id: string
          reflection?: string | null
          score?: number | null
          scored_at?: string | null
          session_id: string
        }
        Update: {
          id?: string
          item_id?: string
          reflection?: string | null
          score?: number | null
          scored_at?: string | null
          session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "session_item_states_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "rubric_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "session_item_states_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      sessions: {
        Row: {
          created_at: string
          customer_context: string | null
          ended_at: string | null
          id: string
          notes: string | null
          outcome: string | null
          outcome_revenue: number | null
          owner_id: string
          rubric_id: string
          score_cached: number | null
          started_at: string
          title: string | null
        }
        Insert: {
          created_at?: string
          customer_context?: string | null
          ended_at?: string | null
          id?: string
          notes?: string | null
          outcome?: string | null
          outcome_revenue?: number | null
          owner_id: string
          rubric_id: string
          score_cached?: number | null
          started_at?: string
          title?: string | null
        }
        Update: {
          created_at?: string
          customer_context?: string | null
          ended_at?: string | null
          id?: string
          notes?: string | null
          outcome?: string | null
          outcome_revenue?: number | null
          owner_id?: string
          rubric_id?: string
          score_cached?: number | null
          started_at?: string
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sessions_rubric_id_fkey"
            columns: ["rubric_id"]
            isOneToOne: false
            referencedRelation: "rubrics"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      seed_rubric: { Args: { payload: Json }; Returns: Json }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
