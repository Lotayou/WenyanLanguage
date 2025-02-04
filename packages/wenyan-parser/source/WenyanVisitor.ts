// Generated from packages/Wenyan.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'

import { StringRemove0Context } from './WenyanParser'
import { StringRemove2Context } from './WenyanParser'
import { StringRemove1Context } from './WenyanParser'
import { NumberIntegerContext } from './WenyanParser'
import { NumberIntegerCNContext } from './WenyanParser'
import { NumberFloatContext } from './WenyanParser'
import { NumberFloatCNContext } from './WenyanParser'
import { ProgramContext } from './WenyanParser'
import { StatementContext } from './WenyanParser'
import { IfStatementContext } from './WenyanParser'
import { DataContext } from './WenyanParser'
import { DeclareDataContext } from './WenyanParser'
import { ModuleContext } from './WenyanParser'
import { DeclaremoduleContext } from './WenyanParser'
import { DeclareStringContext } from './WenyanParser'
import { StringContext } from './WenyanParser'
import { VariableContext } from './WenyanParser'
import { ApplyStatementContext } from './WenyanParser'
import { ApplyFunctionContext } from './WenyanParser'
import { ApplyStackContext } from './WenyanParser'
import { StackInContext } from './WenyanParser'
import { StackPopOneContext } from './WenyanParser'
import { StackPopContext } from './WenyanParser'
import { StackOutContext } from './WenyanParser'
import { StackReturnContext } from './WenyanParser'
import { DeclarefunctionContext } from './WenyanParser'
import { VariablesContext } from './WenyanParser'
import { DeclareNumberContext } from './WenyanParser'
import { DeclareBooleanContext } from './WenyanParser'
import { NumberContext } from './WenyanParser'
import { DigitsContext } from './WenyanParser'
import { SkipStatementContext } from './WenyanParser'


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `WenyanParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface WenyanVisitor<Result> extends ParseTreeVisitor<Result> {
    /**
	 * Visit a parse tree produced by the `StringRemove0`
	 * labeled alternative in `WenyanParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitStringRemove0?: (ctx: StringRemove0Context) => Result

    /**
	 * Visit a parse tree produced by the `StringRemove2`
	 * labeled alternative in `WenyanParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitStringRemove2?: (ctx: StringRemove2Context) => Result

    /**
	 * Visit a parse tree produced by the `StringRemove1`
	 * labeled alternative in `WenyanParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitStringRemove1?: (ctx: StringRemove1Context) => Result

    /**
	 * Visit a parse tree produced by the `NumberInteger`
	 * labeled alternative in `WenyanParser.digits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitNumberInteger?: (ctx: NumberIntegerContext) => Result

    /**
	 * Visit a parse tree produced by the `NumberIntegerCN`
	 * labeled alternative in `WenyanParser.digits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitNumberIntegerCN?: (ctx: NumberIntegerCNContext) => Result

    /**
	 * Visit a parse tree produced by the `NumberFloat`
	 * labeled alternative in `WenyanParser.digits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitNumberFloat?: (ctx: NumberFloatContext) => Result

    /**
	 * Visit a parse tree produced by the `NumberFloatCN`
	 * labeled alternative in `WenyanParser.digits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitNumberFloatCN?: (ctx: NumberFloatCNContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitProgram?: (ctx: ProgramContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitStatement?: (ctx: StatementContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitIfStatement?: (ctx: IfStatementContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.data`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitData?: (ctx: DataContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.declareData`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitDeclareData?: (ctx: DeclareDataContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.module`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitModule?: (ctx: ModuleContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.declaremodule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitDeclaremodule?: (ctx: DeclaremoduleContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.declareString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitDeclareString?: (ctx: DeclareStringContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitString?: (ctx: StringContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitVariable?: (ctx: VariableContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.applyStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitApplyStatement?: (ctx: ApplyStatementContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.applyFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitApplyFunction?: (ctx: ApplyFunctionContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.applyStack`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitApplyStack?: (ctx: ApplyStackContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.stackIn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitStackIn?: (ctx: StackInContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.stackPopOne`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitStackPopOne?: (ctx: StackPopOneContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.stackPop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitStackPop?: (ctx: StackPopContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.stackOut`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitStackOut?: (ctx: StackOutContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.stackReturn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitStackReturn?: (ctx: StackReturnContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.declarefunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitDeclarefunction?: (ctx: DeclarefunctionContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.variables`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitVariables?: (ctx: VariablesContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.declareNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitDeclareNumber?: (ctx: DeclareNumberContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.declareBoolean`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitDeclareBoolean?: (ctx: DeclareBooleanContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitNumber?: (ctx: NumberContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.digits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitDigits?: (ctx: DigitsContext) => Result

    /**
	 * Visit a parse tree produced by `WenyanParser.skipStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitSkipStatement?: (ctx: SkipStatementContext) => Result
}

